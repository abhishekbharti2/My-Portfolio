import '../stylesheets/Contact.css'

function handleCopy(value) {
    navigator.clipboard.writeText(value);
    document.getElementById('copymsg').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('copymsg').style.display = 'none'
    }, 1000);
}

export default function Contact() {
    return (
        <div className="contact-page" id='contact'>
            <h1 className='projects-start'>Contact Me</h1>
            <div className="contact-container">
                <div className="contact-left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11344.603545633849!2d81.57501089971723!3d23.184334986240234!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1738604162370!5m2!1sen!2sin" title='location'></iframe>
                </div>
                <div className="contact-mid">
                    <div onClick={() => handleCopy('abhibharti365@gmail.com')}><i className='fa fa-envelope' />abhibharti365@gmail.com</div>
                    <div onClick={() => handleCopy('9713397975')}><i className='fa-brands fa-whatsapp' />9713397975</div>
                    <div onClick={() => handleCopy('+91 9713397975')}><i className='fa fa-phone' />+91 9713397975</div>
                    <span id='copymsg'>Copied</span>
                </div>
                <div className="contact-right">
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="487b169d-1360-4354-8f44-1e908b73e1cc" />
                        <input type="text" placeholder='Enter Your Name' name='Client Name' className='contact-name' required />
                        <input type="email" placeholder='Enter Gmail' name='Client Gmail' className='contact-email' required />
                        <textarea name="Message" id='contact-area' placeholder='Enter Message..'></textarea>
                        <button type='submit' id='contact-submit'>Sent &#x27A4;</button>
                    </form>
                </div>
            </div>
        </div>
    )
}