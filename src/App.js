import './App.css';
import {lazy, Suspense} from 'react';
import Spinner from './code-split/spin/spinner';
import logo from './code-split/img/logo.png';

const Intro = lazy(() => import('./code-split/Intro'));
const Last = lazy(() => import('./code-split/Last'));
const Middle = lazy(() => import('./code-split/Middle'));



function App() {
  return (
    <div className="App" align='center'>
      <header className='App-header'>
        <img src={logo} alt="" />
      </header>

           

      <main className="tbody">
        
      <Suspense fallback={ <Spinner />} >
        <Intro />
      </Suspense>

        <p>
        Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.

The original film (Star Wars), retroactively subtitled Episode IV: A New Hope (1977), was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to filmmaking to direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. The subsequently produced sequel trilogy consists of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).

All nine films of the 'Skywalker saga' were nominated for Academy Awards (with wins going to the first two released) and were commercially successful. Together with the theatrical live action spin-off films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equates to over US$10 billion, and it is currently the second-highest-grossing film franchise of all time.
        </p>

      <Suspense fallback={ <Spinner />  }>
        <Middle />
      </Suspense>

        <p>
        The Jedi Path: A Manual for Students of the Force is a reference book on the Jedi Order and its history by Daniel Wallace. It was released on September 28, 2010.

Although the book has 160 pages, at Celebration V it was revealed that pages 13-16 discuss the prophecy of the Chosen One and are missing, with the in-universe reason being that Darth Sidious tore them out.

It contains multiple inserts placed there by different Jedi, such as Qui-Gon Jinn's Padawan braid and Thame Cerulian's Jedi credit.

The book's in-universe history is that it is the third edition of a Jedi training guide, printed in 115 BBY, and survived the Great Jedi Purge in the possession of Darth Sidious. It was recovered by Squib salvagers near the remains of Byss, and given to Luke Skywalker.

In September 2011, a trade edition of the book was released without the Vault or extra items. This version retained tattered edges, but the section on the Chosen One was marked through rather than torn out.

On January 15, 2012 the book was re-released with additional content and illustrations in an enhanced e-book edition.

The book was released again in August 2014 as part of a Deluxe Box Set with Book of Sith that included two art prints depicting figures from Sith and Jedi history, and again in September 2016 as Star Wars: Secrets of the Galaxy Deluxe Boxed Set with the Imperial Handbook and Bounty Hunter Code.
        </p>

      <Suspense fallback={ <Spinner /> } >
        <Last />
      </Suspense>

        <p>
        "On arrival at the temple, Initiates are sorted in clans. An arbiting grouping in many ways but one that is foster an atmosphere of trust and kinship."
―Count Dooku on the Initiate clans
During their time at the Jedi Temple on Coruscant, Jedi Initiates were placed into Clans. Such Clans were the Bear Clan, the Hawkbat Clan, the Heliost Clan, the Thranta Clan, and a clan that consisted of the Younglings Petro, Ganodi, Katooni, Byph, Zatt and Gungi. When its members reached a certain age, a clan embarked on a journey known as "the Gathering", in which the Initiates would be guided by the Force to their lightsaber crystal on the planet Ilum.
        </p>


        <p><i>
        "If you are of the Dragon Clan, you
are tenacious. Nothing can make you
back away if you do not will it."
        </i></p>

        <p>
        The Dragon Clan was one of the many clans that prospective young Initiates were placed in when they first began to learn the ways of the Jedi Order. Members of this clan were selected based on their perceived tenacity. Once a member of the clan, the students would travel together through the academy at the Jedi Temple until the time they graduated.

Named after the many species of dragon throughout the galaxy, this clan was stationed at the Jedi Temple following the Ruusan Reformation of the Galactic Republic. Producing many students over the centuries, the clan was dissolved along with the rest of the Order in 19 BBY during the Great Jedi Purge.
        </p>
      </main>

    </div>
  );
}

export default App;
