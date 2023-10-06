**Test Sequelize: Migrazioni e Chiave Primaria Composta**

**Scenario:**
Supponiamo che tu stia lavorando per una startup nel settore e-learning. La tua piattaforma attuale ha bisogno di un sistema per gestire corsi, istruttori, studenti e le loro iscrizioni ai corsi.


**Parte 1: Modello e Migrazione**

1.1. **Modello 'Course'**:
- Definisci un modello 'Course' con i seguenti attributi:
  - `courseId`: ID del corso (un identificativo unico).
  - `title`: Titolo del corso.
  - `description`: Descrizione breve del corso.
  - `startDate`: Data di inizio del corso.
  - `endDate`: Data di fine del corso.
  
1.2. **Modello 'Instructor'**:
- Definisci un modello 'Instructor' con questi attributi:
  - `instructorId`: ID dell'istruttore (un identificativo unico).
  - `firstName`: Nome dell'istruttore.
  - `lastName`: Cognome dell'istruttore.
  - `email`: Email dell'istruttore (assicurati che sia unico).

1.3. **Modello 'Student'**:
- Crea un modello 'Student' con questi attributi:
  - `studentId`: ID dello studente (un identificativo unico).
  - `firstName`: Nome dello studente.
  - `lastName`: Cognome dello studente.
  - `email`: Email dello studente.
  - `points`: Punti accumulati dallo studente per completare i corsi o altre attività.

1.4. **Modello 'Enrollment'**:
- Questo modello rappresenta l'iscrizione degli studenti ai corsi. Deve avere:
  - `studentId`: ID dello studente.
  - `courseId`: ID del corso.
  - La combinazione di `studentId` e `courseId` dovrebbe formare una chiave primaria composta.

1.5. **Relazioni**:
- Un corso può avere molti studenti e uno studente può iscriversi a molti corsi. Usa il modello 'Enrollment' per gestire questa relazione many-to-many.
- Un corso ha un solo istruttore, ma un istruttore può tenere più corsi. Gestisci questa relazione.

1.6. **Migrazioni**:
- Crea una migrazione che implementi i modelli e le relazioni di cui sopra nel database.

1.7. **Aggiunta di un Nuovo Campo**:
- Ora, la piattaforma desidera tracciare il 'livello' di ciascun corso (es. principiante, intermedio, avanzato). Aggiungi una colonna al modello 'Course' di nome 'level' e crea una migrazione per implementare questa modifica nel database.

1.8. **Seeding della tabella Studenti**:
- Crea un seeder per gli studenti; assegna un valore random per la colonna 'points' compreso tra 30 e 970.

1.9. **Creazione Rotta Ranking**:
- Implementa una rotta con il path /api/v1/ranking che, quando viene interpellata, ritorni una lista di max 2 studenti con un punteggio (valore nella colonna points) superiore a 50 e inferiore a 450. La risposta dovrebbe essere in formato JSON. Puoi prevedere di gestire i casi in cui non vi siano utenti con il punteggio desiderato o vi sia un errore generico nel controller.


**Valutazione**:
- Assicurati che tutte le migrazioni funzionino senza errori.
- Le relazioni tra modelli devono essere correttamente implementate, compresa la chiave primaria composta nel modello 'Enrollment'.
- I seeders dovrebbero popolare il database con dati significativi.
- Il codice della rotta deve essere strutturato in modo da suddividere correttamente la logica di business dal routing.
- Salva il codice su un repository git suddividendo le 9 azioni sopra proposte in commit diversi.