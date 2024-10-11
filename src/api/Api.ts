import { Contact } from '../models/Contact';
import mockedContacts from '../api/mock/Contacts.json'; // Import the mocked contacts
import { AppEnv } from '../config/config'; // Import dynamic config

/**
 * Fetches live information from the API.
 *
 * @returns {Promise<Contact[]>} A promise that resolves to an array of Contact objects.
 */
export const fetchLiveInformation = async (): Promise<Contact[]> => {
  // Replace with your actual API endpoint
  const response = await fetch(AppEnv.apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch live information');
  }
  const responseData = response.json()
  console.log("Live data: ")
  console.log(responseData)
  return responseData;
};

/**
 * Fetches mocked contact information for testing purposes.
 *
 * @returns {Promise<Contact[]>} A promise that resolves to an array of Contact objects.
 */
export const fetchMockedInformation = async (): Promise<Contact[]> => {
  console.log("Mock data: ")
  console.log(mockedContacts)
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockedContacts), 1000); // Simulate network delay
  });
};

/**
 * Fetches contact information based on the current live state.
 *
 * @param {boolean} isLive - Determines whether to fetch live or mocked information.
 * @returns {Promise<Contact[]>} A promise that resolves to an array of Contact objects.
 */
export const fetchContacts = async (isLive: boolean): Promise<Contact[]> => {
  if (isLive) {
    return await fetchLiveInformation();
  } else {
    return await fetchMockedInformation();
  }
};