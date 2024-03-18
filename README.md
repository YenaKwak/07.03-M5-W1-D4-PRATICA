## Crea la tua prima applicazione React, EpiBooks!

<br>
1. Utilizza il template create-react-app per creare una nuova applicazione.
<br><br>
2. Installa e importa bootstrap + react-bootstrap nell'applicazione.
<br><br>
3. Crea un componente di nome MyNav, che renderizzi una navbar di bootstrap con i seguenti link: Home, About e Browse.
Nota: non conosciamo ancora come re-indirizzare l'utente su una diversa pagina, quindi inserisci '#' come href su ogni link
<br><br>
4. Crea un componente di nome MyFooter, che renderizzera' un footer per l'applicazione.
<br><br>
5. Crea un componente di nome Welcome, che rederizzera' un Alert e un titolo per l'applicazione.
<br><br>
6. Crea un componente di nome AllTheBooks: questo componente deve leggere da UNO dei file.json forniti e renderizzare una griglia contenente le copertine dei libri.
<br><br>


### 11.03 ADDED (11.03-M5-W2-D1-PRATICA)

<br>
1. Crea un componente di nome SingleBook. Questo componente ricevera' un libro come prop, e renderizzera' la sua copertina e il suo titole. Utilizza il componente Card di react-bootstrap (la struttura dell'oggetto del libro sara' quella dei libri dell'ultiom esercizio!)
<br><br>
2. Modifica il componente AllTheBooks in modo che il .map() renderizzi non delle immagini isolate, ma una lista di componenti SingleBook
<br><br>
3. Crea un input controllato all'interno del componente AllTheBooks.
il componente deve utilizzare il valore di questo input come filtro e mostrare solamente i libri che contengono nel titolo il testo cercato. (Suggerimento: salva il contenuto del campo di testo nello stato del componente e utilizzalo insieme a .filter, .includes e .map)
<br><br>
4. Crea lo stato all;interno di SingleBook e inserisci una proprieta' booleana di nome selected.
Cliccando sulla copertina di un libro, la proprieta' selected deve cambiare valore.
Se selected ha valore true, la copertina del libro deve aggiungere un bordo rosso.
<br>
