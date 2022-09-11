import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  public questions = [
    // { question: "", answer: ""},
    {
      question: "Is yoga just stretching/exercising?",
      answer: "Nope! While practicing yoga asana (physical poses) helps our bodies build flexibility and    strength, yoga is so much more than that! In order to respect the culture yoga originated from and the vast and rich group of practices we call 'yoga', I strive to incorporate other aspects of yoga besides physical asana when I teach both adults and children - including yoga philosophy, meditation and mindfulness, pranayama, and more."
    },
    { 
      question: "Why do you use Sanskrit when naming poses?", 
      answer: "Using the language that yogis used to teach and pass down knowledge from person to person for thousands of years helps us today by 1) respecting and honoring where this practice originates from, 2) preserving the meaning of words so that we may better understand the poses and concepts, 3) embracing that children are capable and enjoy learning new languages, and 4) acknowledging that Sanskrit sounds in themselves are said to affect us on a vibrational level."
    },
    { 
      question: "How do we practice yoga in a way that appreciates Indian and South Asian culture rather than appropriating it?", 
      answer: "Like all of these questions, answering this is complex and I am still learning and growing my own understanding! I work to honor yoga's roots and appreciate the culture from which it came by practicing and teaching not just asana but yoga philosophy, meditation, mindfulness, pranayama and more. My intention is to acknowledge where yoga came from (India, South Asia) and share this with students. Using and pronouncing Sanskrit correctly also helps me honor yoga's roots."
    },
    { 
      question: "Is yoga a religion?", 
      answer: "To summarize a very complex topic, yoga is a practice that has been passed down orally for thousands of years and thus has branched off into many different lineages. The practice has shifted and changed with every different group of people who have practiced it, and the 'yoga' anyone is doing today or in the past will be different based on their teacher and their teacher's teacher etc. Some of these lineages have intersected with religions like Hinduism, Buddhism, and Jainism and in those cases yoga and religion have become intertwined. In this way, different components and traditions of yoga may or may not be interconnected with religion. Is yoga spiritual? I think absolutely. Yoga is about not just connecting with your body, but connecting with your mind and spirit as well."
    },
    { 
      question: "Can my child practice yoga if we practice a different religion in our home?", 
      answer: "As a yogi, a yoga teacher, an educator, and a parent myself, I believe the answer is yes, but you may have a different understanding and perspective. I see a lot of value in offering opportunities for kids to interact with and learn from other cultures, especially in a way that helps them appreciate and respect that culture in an authentic way. If you would be open to your child visiting a place of worship that is different from your own, eating an authentic meal cooked by a person from a culture different from your own, or listening and dancing to music from a culture outside your own as a way of broadening their experiences and connecting with people who are different from themselves, then I think your child most definitely can practice yoga and practice your family's religion at the same time. I embrace teaching our kids to be open-minded and open-hearted, creating space to connect with humans from all walks of life."
    }
  ]
}
