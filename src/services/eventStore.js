import { create } from "zustand";

const useEventStore = create((set) => ({
  items: [
    
  ],
  isLoading: false,
  error: null,
  filterValue: "",
  eventDetails: {},
  setEventDetails: (details) => set({ eventDetails: details }),
  setFilterValue: (value) => set({ filterValue: value }),

  fetchEvents: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        "https://6468ba5260c8cb9a2cb077de.mockapi.io/api/events"
      );
      const data = await response.json();
      set({ items: data, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },

  fetchEventById: async (id) => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        `https://6468ba5260c8cb9a2cb077de.mockapi.io/api/events/${id}`
      );
      const data = await response.json();
      set({ eventDetails: data, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },

  deleteEventByID: async (id) => {
    try {
      await fetch(
        `https://6468ba5260c8cb9a2cb077de.mockapi.io/api/events/${id}`,
        {
          method: "DELETE",
        }
      );

      set((state) => ({
        items: state.items.filter((event) => event.id !== id),
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },

  addEvent: (event) => {
    set((state) => ({
      items: [...state.items, event],
    }));
  },
}));

export default useEventStore;