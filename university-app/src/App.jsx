import './App.css';
import myPhoto from './assets/moi.jpg';

function App() {
  const student = "Ahmed Ben Abdallah";
  const ema = "ahmedbenabdallah20060613@gmail.com";
  const tel = "+216 25180041";
  const fil = "Génie Logiciel et Systèmes d'informatique";
  const grp = "GLSI2";
  const vil = "Mahdia";
  const ann = "2ème année";

  return (
    <div className="card-container">
      {/* قسم الصورة الشخصية */}
      <div className="avatar-container">
        <img 
          src={myPhoto} 
          alt="Avatar étudiant" 
          className="student-avatar"
        />
      </div>

      <h1 className="title">Fiche étudiant</h1>
      
      <div className="info-section">
        <p><strong>Nom & Prénom:</strong> {student}</p>
        <p><strong>Email:</strong> {ema}</p>
        <p><strong>Téléphone:</strong> {tel}</p>
        <p><strong>Filière:</strong> {fil}</p>
        <p><strong>Année d'étude:</strong> {ann}</p>
        <p><strong>Groupe:</strong> {grp}</p>
        <p><strong>Ville:</strong> {vil}</p>
      </div>

      {/* زر إرسال البريد الإلكتروني */}
      <div className="button-container">
        <a href={`mailto:${ema}`} className="contact-btn">
          Contacter
        </a>
      </div>
    </div>
  );
}

export default App;