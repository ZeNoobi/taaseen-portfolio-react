const ContactSection = () => {
  return (
    <div id="contact" className='w-full h-full bg-gradient-to-b from-lightnavy to-navy flex justify-center items-center'>
      <div className='bg-white w-[900px] h-1/2 flex items-center flex-col rounded-xl'>
        <header className='h-1/4 text-4xl'><h4>Let&apos;s Get In Touch!</h4></header>
        <div>Name: </div>
        <input className='bg-slate-200' type="text" name="Username"/>
        <div>Email: </div>
        <input className='bg-slate-200' type="email" name="Email" id="email" />
        <div>Message: </div>
        <input className='bg-slate-200' type="text" name="Message" id="message" />
        <button type="button">Submit</button>
      </div>
    </div>
  );
};

export default ContactSection;
