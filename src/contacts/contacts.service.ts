import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

export interface Contact {
    uuid?: number;
    usuariouuid: string;
    nombre: string;
    apellidos?: string;
    telefono: number;
    correo: string;
}

@Injectable()
export class ContactsService {
    contacts: Contact[] = [
        {uuid: 1,
        usuariouuid: "1",
        nombre: "string",
        apellidos: "string",
        telefono: 184716548,
        correo: "string"},
        {uuid: 2,
        usuariouuid: "2",
        nombre: "string2",
        apellidos: "string22",
        telefono: 1847165482,
        correo: "string2"},
        {uuid: 3,
        usuariouuid: "3",
        nombre: "string3",
        apellidos: "string3",
        telefono: 1847165483,
        correo: "string3"},
    ]

    getContacts(): Contact[] {
        return this.contacts;
    }

    getContact(uuid: number): Contact {
        const foundContact = this.contacts.find(contact => contact.uuid === uuid);
        if (!foundContact) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND);
        return foundContact;
    }

    createContact(contactData: Contact): Contact {
        this.contacts.push(contactData);
        return contactData;;
    }

    updateContact(uuid: number, contactdata: Contact): Contact {
        const foundContact = this.getContact(uuid);
        if (!foundContact) this.createContact(contactdata);
        const edited = {...foundContact, ...contactdata};
        this.contacts = this.contacts.filter(contact => contact.uuid !== uuid);
        this.contacts.push(edited)
        return edited;;
    }

    editContact(uuid: number, contactdata: Contact): Contact {
        const foundContact = this.getContact(uuid);
        if (!foundContact) throw new HttpException("esta id no existe", HttpStatus.NOT_FOUND);
        const edited = {...foundContact, ...contactdata};
        this.contacts = this.contacts.filter(contact => contact.uuid !== uuid);
        this.contacts.push(edited)
        return edited;
    }

    deleteContact(uuid: number): boolean {
        const arrFinal = this.contacts.filter(contact => contact.uuid !== uuid);
        if (this.contacts == arrFinal) return false;
        this.contacts = arrFinal;
        return true;
    }

}
