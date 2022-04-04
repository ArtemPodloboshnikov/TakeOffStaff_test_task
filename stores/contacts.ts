import { makeAutoObservable } from "mobx";

class Contacts
{
    contacts: string[] = ['Валера', 'Вика', 'Света', 'Маша', 'Катя', 'Лера', 'Слава', 'Стас'];
    duplicate_contacts: string[] = [];
    user_contact: string = '';

    constructor()
    {
        makeAutoObservable(this);
    }

    setUserContact(contact: string)
    {
        this.user_contact = contact;
    }

    add()
    {
        if (this.duplicate_contacts.length == 0)
        {
            this.contacts.push(this.user_contact);
        }
        else
        {
            this.duplicate_contacts.push(this.user_contact);
            this.contacts.push(this.user_contact);
        }
    }

    search()
    {
        if (this.user_contact != '')
        {
            if (this.duplicate_contacts.length == 0)
                this.duplicate_contacts = [...this.contacts];
            if (this.contacts.length == this.duplicate_contacts.length)
                this.contacts = this.contacts.filter(contact=>new RegExp(`^${this.user_contact}`, 'gi').test(contact));
            else
                this.contacts = this.duplicate_contacts.filter(contact=>new RegExp(`^${this.user_contact}`, 'gi').test(contact));
        }  
        else
        {
            this.reset();
        }
    }

    remove(index: number)
    {
        if (this.duplicate_contacts.length == 0)
        {
            this.contacts.splice(index, 1);
        }
        else
        {
            const current_contact = this.contacts[index];
            this.contacts.splice(index, 1);
            this.duplicate_contacts.splice(this.getOriginalIndex(current_contact), 1);
        }
    }

    edit(index: number)
    {
        if (this.duplicate_contacts.length == 0)
        {
            this.contacts[index] = this.user_contact;
        }
        else
        {
            const current_contact = this.contacts[index];
            this.contacts[index] = this.user_contact;
            this.duplicate_contacts[this.getOriginalIndex(current_contact)] = this.user_contact;
        }
    }

    reset()
    {
        this.contacts = this.duplicate_contacts;
        this.duplicate_contacts = [];
        this.user_contact = '';
    }

    private getOriginalIndex(current_contact: string)
    {
        return this.duplicate_contacts.findIndex(contact=>contact==current_contact)
    }
}

export default new Contacts();