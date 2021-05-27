import { Action, createReducer, on} from '@ngrx/store';
import { WorkState } from '../models/work.state';
import * as workActions from '../actions/work.actions'





const initState: WorkState = {
  workList: []
}

const _workReducer = createReducer(
  initState,


  on(workActions.setWork, state => {
    return {
      ...state,
      workList: [
        {
          title: 'Undersköterska',
          place: 'Attendo',
          desc: 'Jag arbetar i ett område inom hemtjänsten i Västerås. Där reser jag, antingen till fots, eller via cykel, hem till folk som behöver hjälp för att få vardagen att gå ihop. Det kan vara allt från inköp, tvätt och städning, till medicingivning och personlig hygien. Ett yrke där kundbemötande är det viktigaste, och att respektera situationen man sätter sig i där man befinner sig i deras hem.',
          date: 'Nov 2019 - Aktuellt'
        },
        {
          title: 'Undersköterska',
          place: 'Vardaga',
          desc: 'Jag arbetar på en enhet på ett äldreboende som specialiserar sig på äldre med olika demenssjukdomar. Förutom vardaglig omvårdnad, ser vi också till att aktiviteter är tillgängliga dagligen, för att man ska ha tillgång till socialt umgänge och stimulans för alla som vill. Vi personal står också för all bakning och matlagning till alla måltider och fikastunder. Medicinhantering är också en viktig del i mitt arbete, vilket innefattar både vanligare mediciner och insulin.',
          date: 'Dec 2017 - Nov 2019'
        },
        {
          title: 'Boendestödjare',
          place: 'JATC',
          desc: 'Ett nyöppnat gruppboende för personer med autism. Jag har varit med i stort sett från starten av verksamheten, och har varit med och byggt upp den tillsammans med mina kollegor på plats. Detta med företaget JATC i ryggen som arbetsgivare. Jag har även jobbat extra på den dagliga verksamheten i samband med boendet. Här har jag hjälpt till att habilitera personer med autism, hjälpa dem bli så självständiga som möjligt och gett dem stöd vid behov.',
          date: 'Nov 2015 - Sept 2017'
        },
        {
          title: 'Personlig Assistent',
          place: 'STIL',
          desc: 'Jag assisterar en person som har ett gravt rörelsehinder. Jag har hjälpt till med nästan allt som kan tänkas av en assistent. Jag har varit armar och ben, samt ögon, som personen själv har uttryckt sig. Allt från att ta sig upp på morgonen och göra hen färdig för dagen, till att laga mat och hjälpa till med massage, stretching och laserbehandling. Jag arbetar både dag, kväll och natt. Jag är tillsammans med mina kollegor helt ansvarig för mitt eget schema.',
          date: 'Nov 2015 - Sept 2017'
        },
        {
          title: 'Fältarbetare',
          place: 'Stockholmsmässan',
          desc: 'Jag har arbetat under en kongress på Stockholmsmässan som pågick under en vecka. Då fick jag hantera stor stress, då det är otroligt många besökare som jag ska betjäna under en kort och intensiv tid varje dag.',
          date: 'Sept 2015 - Sept 2015'
        },
        {
          title: 'Undersköterska',
          place: 'Servicehuset Tranan',
          desc: 'Jag har spenderat tid åt att hjälpa äldre personer att behålla en kvalitet i livet, genom att assistera vid bl.a. matning, servering, toalettbesök, och andra vardagliga sysslor. Jag har inskolats på alla tre avdelningar, och fått medicindelegering, inklusive Insulin,  så jag är erfaren inom medicinhantering.',
          date: 'Feb 2014 - Sept 2015'
        },
        {
          title: 'Timvikarie',
          place: 'Café 2:an',
          desc: 'Jag har jobbat med en enhet på ungdomscaféet, där ungdomar från åk 7 och upp till 18 års ålder. Jag hjälpte till med både aktiviteter och projekt, där jag personligen medverkar och skapar tillsammans med ungdomarna, både med musik, pyssel och fotografi. Jag har även haft ett ekonomiskt ansvar.',
          date: 'Nov 2013 - Dec 2015'
        }, 
      ]
    }
  })

)

export function WorkReducer(state: WorkState | undefined, Action: Action) {
  return _workReducer(state, Action)
}


 /* 
 {
  title: '',
  place: '',
  desc: '',
  date: ''
}, 
*/