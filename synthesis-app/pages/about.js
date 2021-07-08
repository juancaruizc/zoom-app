import NavBar from "../components/NavBar";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <NavBar />
      <section className={styles.main}>
        <h2>About Me</h2>
        <p className={styles.text}>
          Hi! My name is Juan Ruiz. A little bit about me, I currently live in
          Arizona. I am a 1st generation immigrant! I also decided to opt-out of
          the traditional route to becoming a software engineer. One of the
          things that bring me the most joy in life is building things and
          solving incredibly ambitious problems. After much thought, I suspect
          this is how I bring the most value to the world. Some other things I
          like to do for fun are hanging out with friends/family, reading books,
          observing nature, and trying to optimize things I see around me.
        </p>
        <br />

        <h2>Why Synthesis</h2>
        <p className={styles.text}>
          I have had a love and passion for education for a couple years now.
          Ever since I was a junior in High School, I started questioning the
          things around what they were teaching us, why this? Why that? I came
          to the conclusion that the traditional education system simply just
          sucks. I wouldn't say I was the best student with the best grades, in
          fact, I was the guy the teacher just didn't like haha. It wasn't up
          until when I was about to graduate where I really started to learn how
          to code! [1] I have always been obsessed with tech [2]. When the time
          rolled around, I decided to not really do what my peers or even
          parents were telling me to do, but rather take a look at my goals, the
          options I had, and really make my own analysis and weigh my options
          with my own parameters. This led me to make one of the best decisions
          I think I’ve made thus far. To opt-out of a traditional CS degree and
          go to Lambda School. I am incredibly impressed with how much different
          traditional schooling is compared to alternative sources of education.
        </p>
        <br />
        <p className={styles.text}>
          This is why I want to work at Synthesis, I truly believe that it can
          change education, and being part of building that future gets me out
          of this world excited. I always wonder how much better the world could
          be, how many more problems could be solved, if we get education just
          right. It is the fundamental change we have to make for the growth and
          trajectory of the world to go from good to great! I've noticed some
          organizations start working on this, more towards higher education
          (Like Lambda and others) but I've seen few work on younger people
          (elementary-middle schoolers) I actually believe that we should start
          here. This will help these people grow up to be better problem solvers
          and independent thinkers once they reach the age of higher education.
          I could go on and on, but this is why I am incredibly excited about
          Synthesis and want to work in this organization!
        </p>
        <br />
        <p className={styles.text}>
          [1] I always wonder why I never learned to code earlier, I suspect
          maybe it is because of the environment and town I lived in. (Nogales,
          AZ) ~20k population. I don't think I ever even heard the world
          "coding" growing up, it is just something that was (and still is)
          unheard of in the area.
        </p>

        <p className={styles.text}>
          [2] When I was in middle school, I would pretend I was sick so I could
          watch the live apple keynote events. When I was in early elementary, I
          would build paper phones and sell them to my family (because I thought
          they were cool!) I also loved building things, (I would help my dad
          build vintage cars!)
        </p>
      </section>
    </>
  );
};

export default About;