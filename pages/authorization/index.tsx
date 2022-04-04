import { observer } from "mobx-react-lite";
import { NextPage } from "next";

import styles from './styles.module.css';
import authorization from "../../stores/authorization";
import { Placeholders, Routes } from "../../constants/authorization";
import { useRouter } from "next/router";

const Authorization: NextPage = observer(()=>{

    const router = useRouter();
    const contactsPage = ()=>router.push(Routes.BUTTON_ENTER);

    return (

        <div className={styles.window}>
            <div className={styles.fields}>
                <input
                value={authorization.name}
                onChange={(e)=>authorization.setName(e.target.value)}
                placeholder={Placeholders.NAME}
                />
                <input
                type="password"
                value={authorization.password}
                onChange={(e)=>authorization.setPassword(e.target.value)}
                placeholder={Placeholders.PASSWORD}
                />
                <input
                type="button"
                onClick={()=>authorization.goToPage(contactsPage)}
                value={Placeholders.BUTTON_ENTER}
                />
            </div>
        </div>

    )

})

export default Authorization;