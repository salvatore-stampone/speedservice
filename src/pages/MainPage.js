import './MainPage.css'

export default function MainPage() {
    return (
        <>
            <div className='section section-one'>
               <img src={require('../assets/images/logo-no-text.png')} alt='Logo' className='logo'/>
               <span className='section-one__name'>SPEEDSERVICE</span> 
            </div>
            <div className='section section-two'>
               <span className='section-two__motto'>Campioni di Puntualità</span>
               <span className='section-two__subtext'>Spedizioni nazionali in 24h ed internazionali in 48h.</span> 
            </div>
            <div className='section section-three'>
               <span className='section-two__motto'>I Nostri Servizi</span>
               <span className='section-two__subtext'>Spedizioni nazionali in 24h ed internazionali in 48h.</span> 
            </div>
        </>
    )
}