import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/AccountMain.module.css'
import { useAuth } from '../context/AuthUserContext';
import { useState } from 'react';
import Header from '../lib/header'
import EditAccount from '../lib/EditAccount';

const ClassPage: NextPage = () => {
    const [view, setView] = useState(0);
    const { authUser, loading } = useAuth();
    const remainder = authUser || loading;
    return (
        <div className={styles.html}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className={styles.body}>
                <Header pageTitle="Account"></Header>
                <div className={styles.top}>
                    <div className={styles.leftHalf}>
                        <a className={styles.tab} href='#edit' style = {{
                            backgroundColor: 'cyan'
                        }} onClick={(e) => {e.preventDefault(); setView(0);}}>Edit Account</a>
                        <a className={styles.tab} href='#delete' style = {{
                            backgroundColor: 'yellow'
                        }} onClick={(e) => {e.preventDefault(); setView(1);}}>Delete Account</a>
                    </div>
                    <div className={styles.main}>
                        {view == 0 ? <EditAccount/> : <p>deleting acc...</p>}
                    </div>
                    
                </div>
                
            </div>
        </div>
        

 

        
    )
}

export default ClassPage
