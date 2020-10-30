import Image from 'next/image'

export default function Home() {
  return (
        <ion-refresher slot="fixed" closeDuration="10ms">
          <ion-refresher-content />
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
            <Image
              src="https://wp-kyoto.cdn.rabify.me/wp-content/uploads/2020/09/3309ad8f2b08c155510dded29efe688e-20200904135805.png"
              alt="Picture of the author"
              width={500}
              height={300}
            />
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-item>
              <ion-icon name="pin" slot="start"></ion-icon>
              <ion-label>ion-item in a card, icon left, button right</ion-label>
              <ion-button fill="outline" slot="end">View</ion-button>
            </ion-item>

            <ion-card-content>
              This is content, without any paragraph or header tags,
              within an ion-card-content element.
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-item href="#" class="ion-activated">
              <ion-icon name="wifi" slot="start"></ion-icon>
              <ion-label>Card Link Item 1 activated</ion-label>
            </ion-item>

            <ion-item href="#">
              <ion-icon name="wine" slot="start"></ion-icon>
              <ion-label>Card Link Item 2</ion-label>
            </ion-item>

            <ion-item class="ion-activated">
              <ion-icon name="warning" slot="start"></ion-icon>
              <ion-label>Card Button Item 1 activated</ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="walk" slot="start"></ion-icon>
              <ion-label>Card Button Item 2</ion-label>
            </ion-item>
          </ion-card>
        </ion-refresher>
  )
}
