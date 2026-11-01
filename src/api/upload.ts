const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export async function uploadImage(file: File): Promise<string> {
    const formData = new FormData();         
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
    });
    if (!response.ok) throw new Error("העלאת התמונה נכשלה. נסי שוב");

    const data = await response.json();
    // הקישור נשמר עם דחיסה אוטומטית: פורמט חכם, איכות אוטומטית ורוחב עד 1200 פיקסלים.
    // התמונה המקורית נשארת שמורה ב-Cloudinary בלי שינוי
    return data.secure_url.replace("/image/upload/", "/image/upload/f_auto,q_auto,w_1200/");                          
}