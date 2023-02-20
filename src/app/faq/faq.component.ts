import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent {
  public faq = [{
    header: "Is yoga for me / my child?",
    questions: [
      {
        q: "Is my child too young for yoga?",
        a: "I think it’s never too early for us to model for our children how we take care of our bodies, minds, and spirits. That’s why my classes for younger kids are always with a parent/guardian - the intention is for the adult to learn and practice and model right alongside their child. I’ve found that most 3-year-olds and up can follow along in my classes quite well - but each child is an individual and you know your child best. (Some 2-year-olds have connected with it really well, and if they’re under 2 you’ll probably be mostly modeling for them!) Regardless if you’re 3 or 33 years old, a yoga teacher and their offerings may either be a good fit or not the right match, so I encourage you to try a class and see if we’re a good fit. If you try and things aren’t clicking for you or your child, perhaps you/they will connect more with another teacher or when they’re a bit older."
      },
      {
        q: "Can my child participate if they are outside the age range in your description?",
        a: "Yes! I provide a rough age range so you know my intention of who the class is geared towards, but that is flexible. Children (like all humans) are so unique and each has their own skills they are working on, it’s highly possible your child could fit right in even if they’re a bit older or younger than I wrote in the description. Reach out and send me a message to let me know!"
      },
      {
        q: "What if I (as the adult/parent/guardian) am new to yoga? What if I’m not (flexible, strong, etc.) enough for yoga?",
        a: "Yoga is for every body! Just like our kids, we are always growing. My classes are inclusive of all levels of experience and body types. Some of us are cultivating our strength and endurance, for others it’s flexibility, and others it’s the ability to be still and be in our bodies instead of our minds - or most likely it’s all of the above! Whether we are talking about physical poses or meditation or breathing, yoga is a *practice* and will meet you wherever you are at!"
      },
      {
        q: "My child has a unique need, (dis)ability, neurotype, etc. - can they participate?",
        a: "Absolutely - all are welcome to learn and grow together in my classes! As a school psychologist, I have experience working with kids with all sorts of unique needs, preferences, and most importantly strengths! If you’d like, reach out and send me a message so I can learn a bit more about your child before class so that I can offer them a safe and supportive experience. (If you feel that private guidance in your home would be more supportive for your child, that is also an option I’d love to offer as well.)"
      }
    ]
  },
  {
    header: "What is yoga?",
    questions: [
      {
        q: "Is yoga just stretching/exercising?",
        a: "Nope! While practicing yoga asana (physical poses) helps our bodies build flexibility and strength, yoga is so much more than that! In order to respect the culture yoga originated from and the vast and rich group of practices we call 'yoga', I strive to incorporate other aspects of yoga besides physical asana when I teach both adults and children - including yoga philosophy, meditation and mindfulness, pranayama, and more."
      },
      {
        q: "Why do you use Sanskrit when naming poses?",
        a: "Using the language that yogis used to teach and pass down knowledge from person to person for thousands of years helps us today by 1) respecting and honoring where this practice originates from, 2) preserving the meaning of words so that we may better understand the poses and concepts, 3) embracing that children are capable and enjoy learning new languages, and 4) acknowledging that Sanskrit sounds in themselves are said to affect us on a vibrational level."
      },
      {
        q: "Is yoga a religion?",
        a: "To summarize a very complex topic, yoga is a practice that has been passed down orally for thousands of years and thus has branched off into many different lineages. The practice has shifted and changed with every different group of people who have practiced it, and the 'yoga' anyone is doing today or in the past will be different based on their teacher and their teacher's teacher etc. Some of these lineages have intersected with religions like Hinduism, Buddhism, and Jainism and in those cases yoga and religion have become intertwined. In this way, different components and traditions of yoga may or may not be interconnected with religion. Is yoga spiritual? I think absolutely. Yoga is about not just connecting with your body, but connecting with your mind and spirit as well."
      },
      {
        q: "Can my child practice yoga if we practice a different religion in our home?",
        a: "As a yogi, a yoga teacher, an educator, and a parent myself, I believe the answer is yes, but you may have a different understanding and perspective. I see a lot of value in offering opportunities for kids to interact with and learn from other cultures, especially in a way that helps them appreciate and respect that culture in an authentic way. If you would be open to your child visiting a place of worship that is different from your own, eating an authentic meal cooked by a person from a culture different from your own, or listening and dancing to music from a culture outside your own as a way of broadening their experiences and connecting with people who are different from themselves, then I think your child most definitely can practice yoga and practice your family's religion at the same time. I embrace teaching our kids to be open-minded and open-hearted, creating space to connect with humans from all walks of life."
      }
    ]
  },
  ]


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
