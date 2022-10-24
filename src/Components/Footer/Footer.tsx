import React from 'react';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';
import pinterest from '../../images/pinterest.svg';
import { Foot } from '../Styles/Container.styled';


export default function Footer() {
  return (
    <>
    <Foot>
        <div className='footer'>
        <article>
        <span className='Ex'>The Movie Hub</span>                  
        </article>
        <article  style={{paddingTop:'15px'}}>
           <span className='color'>The Basics</span>
            <ul>
                <li ><button className='align'>About Us</button></li>
                <li><button className='align'>Contact Us</button></li>
                <li><button>System Status</button></li>
            </ul>
        </article>

        <article  style={{paddingTop:'15px'}}>
            <span className='color'>Get Involved</span>
            <ul>
                <li><button>Contribute Bible</button></li>
                <li><button>Add New Movie</button></li>
                <li><button>Add New Tv Show</button></li>
            </ul>
            
        </article>


        <article  style={{paddingTop:'15px'}}>
           <span className='color'> Community</span>
            <ul>
                <li><button>Guidelines</button></li>
                <li><button>Discussions</button></li>
                <li><button>Leaderboard</button></li>
                <li><button>Support</button></li>
            </ul>
        </article>

        <section >
             <ul className='footer-list-flex' >
                <li><img src={facebook}/></li>
                <li><img src={pinterest}/></li>
                <li><img src={twitter}/></li>
                <li><img src={instagram}/></li>
            </ul>          
        </section>
    </div>    
</Foot>

    </>
  )
}
