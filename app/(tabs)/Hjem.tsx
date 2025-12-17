import { StyleSheet, Text } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#1f6479ff', dark: '#1D3D47' }}
    overskrift='Hjem'
    >
      <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
Hvad fanden sagde du lige om mig, dit helvedes horeyngel? Jeg skal lade dig vide, at jeg dimitterede fra min klasse i frømandskorpset med allerhøjeste anmærkning, og at jeg har deltaget i adskillige hemmelige togter mod Sverige og har over 300 bekræftede drab. Jeg er uddannet i gorillakrigsførelse, og jeg er den bedste snigskytte i hele forsvaret. For mit vedkommende er du blot endnu en skydeskive. Jeg skal blæse hovedet af dig med en nøjagtighed, hvis lige aldrig før er set på denne jord, mærk dig mine satans ord. Tror du, at du kan slippe af sted med at sige sådan noget pis til mig på internettet? Så tro om, spasser. I skrivende stund kontakter jeg mit hemmelige spionnetværk rundt over hele Danmark, og din IP bliver sporet i dette øjeblik, så du må hellere berede dig på stormen, kryb. Stormen, som fuldstændigt tilintetgør den sølle lille sag, du kalder et liv. Du er fandeme død, knægt. Jeg kan være hvor som helst når som helst, og jeg kan dræbe dig på over syvhundrede måder, og det er kun med mine bare næver. Ikke nok med at jeg er udførligt trænet i ubevæbnet nærkamp, jeg har også ubegrænset adgang til søværnets våbenlager, og jeg vil bruge det i dets fulde omfang til at vaske din sørgelige røv bort fra jordens overflade, din lille lort. Hvis bare du på forhånd kunne have vidst, hvilken ugudelig hævn din "vittige" lille bemærkning ville forvolde dig, havde du måske holdt din forpulede kæft. Men det kunne du ikke, det gjorde du ikke, og nu skal du bøde, dit forbandede fjols. Jeg vil skide rent og skært raseri ud over dig, og du skal drukne i det. Du er kraftedeme død, knøs.



      </Text> 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
