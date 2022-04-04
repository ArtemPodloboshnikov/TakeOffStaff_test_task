import { observer } from "mobx-react-lite";
import { NextPage } from "next";

import authorization from "../../stores/authorization";
import { Placeholders } from "../../constants/contacts";
import contacts from "../../stores/contacts";
import styles from './styles.module.css';

const Contacts: NextPage = observer(()=>{
    
    if (authorization.isEnter)
    {

        return (
    
            <div className={styles.wrap}>
                <div className={styles.controllers}>
                    <input
                    value={contacts.user_contact}
                    onChange={(e)=>contacts.setUserContact(e.target.value)}
                    placeholder={Placeholders.NAME}
                    />
                    <input
                    type="button"
                    value={Placeholders.BUTTON_ADD}
                    onClick={()=>contacts.add()}
                    />
                    <input
                    type="button"
                    value={Placeholders.BUTTON_SEARCH}
                    onClick={()=>contacts.search()}
                    />
                    <input
                    type="button"
                    value={Placeholders.BUTTON_RESET}
                    onClick={()=>contacts.reset()}
                    />
                </div>
                <div className={styles.list}>
                    {contacts.contacts.map((contact, index)=>{
                        
                        return (
    
                            <div key={`${contact}_${index}`}>
                                {contact}
                                <input
                                type="button"
                                value={Placeholders.BUTTON_EDIT}
                                onClick={()=>contacts.edit(index)}
                                />
                                <input
                                type="button"
                                value={Placeholders.BUTTON_DELETE}
                                onClick={()=>contacts.remove(index)}
                                />
                            </div>
                        )
    
                    })}
                </div>
            </div>
    
        )
    }
    else
    {
        return <></>;
    }

})

export default Contacts;