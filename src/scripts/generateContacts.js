import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = data ? JSON.parse(data) : [];

    const contactsToAdd = [];
    for (let i = 0; i < number; i++) {
      contactsToAdd.push(createFakeContact());
    }

    await fs.writeFile(
      PATH_DB,
      JSON.stringify([...contacts, ...contactsToAdd], undefined, 2),
    );
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
