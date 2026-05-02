import { BuildingOfficeIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, UsersIcon } from '@heroicons/react/24/outline'
const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-card">
                    <div className="card-head">
                        <BuildingOfficeIcon className="head-icon" />
                        <h3 className='head-title'>Company Information</h3>

                    </div>
                    <p className='card-info'><PhoneIcon className='info-icon' /><span className='card-text'>+1 555‑010‑2020</span></p>
                    <p className='card-info'><EnvelopeIcon className='info-icon' /><span className='card-text'>girlsMagazine@company.com</span></p>
                    <p className='card-info'><MapPinIcon className='info-icon' /><span className='card-text'>+1 555‑010‑2020</span></p>
                </div>
                <div className="contact-card">
                    <div className="card-head">
                        <EnvelopeIcon className="head-icon" />
                        <h3 className='head-title'>subscribe/Newsletter</h3>

                    </div>
                    <div className="contact-mail">
                        <input type='email' className='contact-input peer' />
                        <label className='contact-label'>Enter Your Email:</label>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="card-head">
                        <UsersIcon className="head-icon" />
                        <h3 className='head-title'>Social Media</h3>

                    </div>
                    <div className="social-info">
                        <a href="#"><svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05h-2.3v-2.9h2.3V9.5c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.24h-1.15c-1.14 0-1.5.71-1.5 1.44v1.73h2.56l-.41 2.9h-2.15v7.05A10 10 0 0 0 22 12z" />
                        </svg></a>
                        <a href="#"><svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.96-2.48 9.1 9.1 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.72 4.13A12.84 12.84 0 0 1 1.64 2.16 4.52 4.52 0 0 0 3.1 8.28a4.48 4.48 0 0 1-2.05-.57v0.06a4.52 4.52 0 0 0 3.63 4.44 4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.21 3.14 9.06 9.06 0 0 1-5.6 1.93 9.32 9.32 0 0 1-1.08-0.06 12.79 12.79 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-0.2 0-0.42-0.01-0.63A9.2 9.2 0 0 0 23 3z" />
                        </svg></a>
                        <a href="#"><svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                        </svg></a>
                        <a href="#"><svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.6v1.71h.05c.5-.94 1.72-1.93 3.54-1.93 3.78 0 4.48 2.48 4.48 5.7V21h-4v-5.55c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.91V21h-4z" />
                        </svg></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;