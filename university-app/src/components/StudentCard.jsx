function StudentCard(props) {
  return (
    <div className="card-container">
      {/* قسم الصورة الشخصية */}
      <div className="avatar-container">
        <img 
          src={props.image} 
          alt="Avatar étudiant" 
          className="student-avatar"
        />
      </div>

      <h1 className="title">Fiche étudiant</h1>
      
      <div className="info-section">
        <p><strong>Nom & Prénom:</strong> {props.nomComplet}</p>
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Téléphone:</strong> {props.telephone}</p>
        <p><strong>Filière:</strong> {props.filiere}</p>
        <p><strong>Année d'étude:</strong> {props.anneeEtude}</p>
        <p><strong>Groupe:</strong> {props.groupe}</p>
        <p><strong>Ville:</strong> {props.ville}</p>
      </div>

      {/* زر إرسال البريد الإلكتروني */}
      <div className="button-container">
        <a href={`mailto:${props.email}`} className="contact-btn">
          Contacter
        </a>
      </div>
    </div>
  );
}

export default StudentCard;