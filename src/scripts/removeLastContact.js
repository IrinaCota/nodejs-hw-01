import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const totalContacts = JSON.parse(data);

    if (totalContacts.length > 0) {
      totalContacts.pop();
      fs.writeFile(PATH_DB, JSON.stringify(totalContacts, null, 2));
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();