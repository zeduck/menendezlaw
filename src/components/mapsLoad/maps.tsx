export default function maps() {
  return (
    <div className="flex-[2] xl:flex-[3] transition-all">
      <iframe 
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0791013428743!2d-75.69703852341675!3d45.42790677107342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce052c0ccce04d%3A0xfcb93cdfcca207c3!2sMenendez%20Law%20Refugee%20and%20Immigration!5e0!3m2!1sen!2sca!4v1694661097560!5m2!1sen!2sca" 
        className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-3xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        />
    </div>
  );
}