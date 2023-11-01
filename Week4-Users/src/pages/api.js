const baseURL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${baseURL}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API isteği sırasında bir hata oluştu", error);
    throw error; // Hata durumunda hata fırlat
  }
};

export const fetchUser = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API isteği sırasında bir hata oluştu", error);
    throw error; // Hata durumunda hata fırlat
  }
};
