/**
 * Represents a contact with basic information.
 */
export interface Contact {
    contactId: string;      // Unique identifier for the contact
    firstName: string;      // First name of the contact
    lastName: string;       // Last name of the contact
    phoneNumber: string;    // Phone number of the contact
    emailAddress: string;
    photoUrl?: string | null;    // Email address of the contact
}