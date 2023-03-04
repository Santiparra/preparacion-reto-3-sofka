import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { Contact, ContactsService } from '../contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {}
    
    @Get() 
    getContacts (): Contact[] {    
        return this.contactsService.getContacts();
    }

    @Get(":uuid")
    getContact(@Param( "uuid", ParseIntPipe ) uuid: number): Contact {
        return this.contactsService.getContact(uuid);
    }

    @Post()
    createContact( @Body() contactData: Contact ): Contact {
        return this.contactsService.createContact(contactData);        
    }

    @Put(":uuid")
    updateContact(
        @Body() contactdata: Contact,
        @Param("uuid", ParseIntPipe) uuid: number
    ): Contact {
        return this.contactsService.updateContact(uuid, contactdata)
    }

    @Patch(":uuid")
    editContact(
        @Body() contactdata: Contact,
        @Param("uuid", ParseIntPipe) uuid: number
    ): Contact {
        return this.contactsService.editContact(uuid, contactdata);
    }

    @Delete(":uuid")
    deleteContact( @Param("uuid", ParseIntPipe) uuid: number ): boolean {
        return this.contactsService.deleteContact(uuid);
    }
}
