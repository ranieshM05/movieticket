const API_URL = "/api/booking";

const bookingService = {
  bookSeats: async (data) => {
    const response = await fetch(`${API_URL}/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  },
};

export default bookingService;
