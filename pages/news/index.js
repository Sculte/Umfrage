

import {Fragment} from 'react';
import Link from 'next/Link';

function UmfragePage() {
      return(
            <Fragment>
                  <h1> Bewerte bitte nach bestem Wissen und Gewissen</h1>
                  <ul>
                        <li>
                        <Link href='/news/Tape:x=1'>
                              Tapeabschnitt 1
                        </Link>
                        </li>
                        <li>
                        <Link href='/news/Tape:x=2'>
                              Tapeabschnitt 2
                        </Link>
                        </li>
                        <li>
                        <Link href='/news/Tape:x=3'>
                              Tapeabschnitt 3
                        </Link>
                        </li>
                  </ul>
            </Fragment>
      )
      return <h1> Bewerte bitte nach bestem Wissen und Gewissen</h1>
}

export default UmfragePage;