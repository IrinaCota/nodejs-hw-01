import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contactsCount = JSON.parse(data).length;
    return contactsCount;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
