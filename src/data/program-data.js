import program_3 from '@assets/img/school/programs/morgan_2.jpg';
import program_2 from '@assets/img/school/programs/crazy_hair_day.jpg';
import program_1 from '@assets/img/school/programs/maddy.jpg';
import program_4 from '@assets/img/school/Gia_research.jpg';
import program_5 from '@assets/img/school/programs/Medium.jpg';
import program_6 from '@assets/img/school/jaden.jpg';
import ProgramIconOne from '@svg/program-icon-1';
import ProgramIconTwo from '@svg/program-icon-2';
import ProgramIconThree from '@svg/program-icon-3';
import ProgramIconFour from '@svg/program-icon-4';
import ProgramIconFive from '@svg/program-icon-5';
import ProgramIconSix from '@svg/program-icon-6';
import author_1 from "@assets/img/program/author-1.png";

const program_data = [
  {
    id: 1,
    title: 'Children’s House',
    featured: true,
    subTitle: 'Full-day Program',
    img: program_1,
    img2: program_5,
    subDescription: 'Full-day Program',
    days: 'Mon-Fri : 9:00am-2:30pm',
    details: [
      {
        id: 1,
        description: 'The youngest children in our school engage in practical life activities designed to reinforce care of self and care of environment. The activities support the development of motor control, hand-eye coordination, concentration, independence and a sense of order.'
      },
      {
        id: 2,
        description: 'They engage in sensorial activities with materials such as the beautifully crafted geometric solids, coloured cylinders and colour tablets. They move through the process of reading and writing with the sandpaper letters, movable alphabet and a variety of materials which lead to independence in reading and writing.'
      },
      {
        id: 3,
        description: 'Children are exposed to addition, subtraction, multiplication and division through concrete experiences with Montessori math materials. They engage in collaborative problem solving and independent exploration.'
      },
      {
        id: 4,
        description: 'Outdoor exploration is an important part of our Children’s House experience. The children go on nature hunts in our wooded area. They visit an animal farm and pumpkin patch every year. They grow plants in the classroom. They participate in science experiments, baking and art.'
      },
      {
        id: 5,
        description: 'These environments are truly an oasis for the 3-6 year old child where they are gently guided in their exploration of the universe. When they graduate from the Children’s House, the children excitedly move to the elementary level.'
      },
      {
        id: 6,
        description: 'In the Montessori prepared environment, children have freedom of choice and movement within clearly defined limits. The consistency of these freedoms and limits allows children to feel a sense of security and comfort and to feel the importance of community.'
      },

    ],
    description: 'These classrooms bring together children between the ages of 3 and 6 in an atmosphere of respect, responsibility and enjoyment. The children are exposed to a wide variety of materials and activities in several key areas of education',
    icon: <ProgramIconOne />,
    clrClass: 'clr-1',
    authorImg: author_1,
    authorName: 'Alexia Honix',
    delay: '.2s',
    age: '1-6 Yrs',
    programs: [
      {
        id: 1,
        title: '1-6 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '5.30 Hrs',
        subTitle: 'period',
      }
    ],
    isKeyArea: true,
    keyAreaTitle: 'Key areas of education',
    keyArea: [
      {
        id: 1,
        value: 'Sensorial'
      },
      {
        id: 2,
        value: 'Practical life'
      },
      {
        id: 3,
        value: 'Language'
      },
      {
        id: 4,
        value: 'Physical and biological sciences'
      },
      {
        id: 5,
        value: 'Cultural subjects'
      },
      {
        id: 5,
        value: 'mathematics'
      },
      {
        id: 5,
        value: 'geography'
      }
    ]
  },
  {
    id: 2,
    title: 'The Elementary Years',
    subTitle: 'Elementary',
    featured: true,
    img: program_2,
    img2: program_3,
    subDescription: 'Full-day Program',
    days: 'Mon-Fri : 8:30am-3:00pm',
    description1: 'What this means to us is that the classroom is a dynamic community in which each child is an integral part. We learn that caring for each other is necessary in order for this community to run efficiently and effectively. Our goal is for each child to develop not only a responsibility for the self but for others as well; therefore, attention is given to each child as an individual in relationship to the entire group.',
    description2: 'Our Elementary classes are run by teachers who specialize in the education of the 6-11 year old child. The enriched curriculum integrates a wide variety of “subjects” such as grammar, creative writing, zoology, botany, geology, history, geography and mathematics. The children are actively engaged in research of world cultures, with a look at the work of the United Nations and current events embedded in our daily studies.',
    description3: 'Much of the work that the elementary children do is based on research. Children begin to learn about research in the Children’s Houses. They refine their research skills at the Lower Elementary level. At the Upper Elementary level, the students spend much of their work period researching and reporting. The combination of teacher-initiated and self-chosen research topics allows for the development of a broad and varied education that respects each child’s own particular interests.',
    details: [
      {
        id: 1,
        description: 'What this means to us is that the classroom is a dynamic community in which each child is an integral part. We learn that caring for each other is necessary in order for this community to run efficiently and effectively. Our goal is for each child to develop not only a responsibility for the self but for others as well; therefore, attention is given to each child as an individual in relationship to the entire group.'
      },
      {
        id: 2,
        description: 'Our Elementary classes are run by teachers who specialize in the education of the 6-11 year old child. The enriched curriculum integrates a wide variety of “subjects” such as grammar, creative writing, zoology, botany, geology, history, geography and mathematics. The children are actively engaged in research of world cultures, with a look at the work of the United Nations and current events embedded in our daily studies.'
      },
      {
        id: 3,
        description: 'Much of the work that the elementary children do is based on research. Children begin to learn about research in the Children’s Houses. They refine their research skills at the Lower Elementary level. At the Upper Elementary level, the students spend much of their work period researching and reporting. The combination of teacher-initiated and self-chosen research topics allows for the development of a broad and varied education that respects each child’s own particular interests.'
      }
    ],
    description: 'Harbourview Montessori’s elementary program is exceptional, encompassing the best that the Montessori curriculum has to offer. We see the child as a whole being and approach their learning from a holistic perspective.',
    icon: <ProgramIconOne />,
    clrClass: 'clr-1',
    authorImg: author_1,
    authorName: 'Alexia Honix',
    delay: '.2s',
    age: '7-11 Yrs',
    programs: [
      {
        id: 1,
        title: '7-11 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '6.30 Hrs',
        subTitle: 'period',
      }
    ],
    isKeyArea: false,
    keyAreaTitle: '',
  },
  {
    id: 4,
    title: 'After School Program',
    subTitle: 'Elementary Program',
    featured: true,
    img: program_5,
    img2: program_6,
    subDescription: 'Elementary Program',
    days: 'Mon-Fri : 2:30am-5:30pm',
    details: [
      {
        id: 1,
        description: 'The goal of our Extended Care Program is to provide a safe, relaxing and fun time for children at the end of the school day!'
      },
      {
        id: 2,
        description: 'You will appreciate knowing that your children are having fun in a safe, caring environment while you work.'
      },
      {
        id: 3,
        description: 'Perhaps you would like to pick up groceries or do some shopping after work and you know that we will take great care of your children.'
      },
      // {
      //   id: 4,
      //   description: 'Don’t be disappointed! Call early to secure a space in this fantastically fun program!'
      // }
    ],
    description: 'Our Extended Care program is offered Monday to Friday, 2:30-5:30pm. We aim to cater to working parents who require extended care hours for their children. We usually have extra spaces for parents who occasionally need child care while they attend classes, get groceries or have appointments.',
    icon: <ProgramIconOne />,
    clrClass: 'clr-1',
    authorImg: author_1,
    authorName: 'Alexia Honix',
    delay: '.2s',
    age: '7-11 Yrs',
    programs: [
      {
        id: 1,
        title: '7-11 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '5.30 Hrs',
        subTitle: 'period',
      }
    ],
    isKeyArea: true,
    keyAreaTitle: 'What’s available for children in Extended Care',
    keyArea: [
      {
        id: 1,
        value: 'Healthy, mid-afternoon snacks!'
      },
      {
        id: 2,
        value: 'REALLY COOL crafts for aspiring artists!'
      },
      {
        id: 3,
        value: 'Outdoor time for young naturalists and fitness buffs'
      },
      {
        id: 4,
        value: 'Building blocks, legos, etc. for budding engineers!'
      },
      {
        id: 5,
        value: 'Puppets for developing actors!'
      },
      {
        id: 6,
        value: 'A library for little bookworms!'
      },
      {
        id: 7,
        value: 'And so much more…!'
      }
    ]
  },
  {
    id: 3,
    title: 'Children’s House',
    subTitle: 'Extended-day Program',
    featured: false,
    img: program_5,
    img2: program_3,
    subDescription: 'Full-day Program',
    days: 'Mon-Fri : 9:00am-5:00pm',
    details: [
      {
        id: 1,
        description: 'The youngest children in our school engage in practical life activities designed to reinforce care of self and care of environment. The activities support the development of motor control, hand-eye coordination, concentration, independence and a sense of order.'
      },
      {
        id: 2,
        description: 'They engage in sensorial activities with materials such as the beautifully crafted geometric solids, coloured cylinders and colour tablets. They move through the process of reading and writing with the sandpaper letters, movable alphabet and a variety of materials which lead to independence in reading and writing.'
      },
      {
        id: 3,
        description: 'Children are exposed to addition, subtraction, multiplication and division through concrete experiences with Montessori math materials. They engage in collaborative problem solving and independent exploration.'
      },
      {
        id: 4,
        description: 'Outdoor exploration is an important part of our Children’s House experience. The children go on nature hunts in our wooded area. They visit an animal farm and pumpkin patch every year. They grow plants in the classroom. They participate in science experiments, baking and art.'
      },
      {
        id: 5,
        description: 'These environments are truly an oasis for the 3-6 year old child where they are gently guided in their exploration of the universe. When they graduate from the Children’s House, the children excitedly move to the elementary level.'
      },
      {
        id: 6,
        description: 'In the Montessori prepared environment, children have freedom of choice and movement within clearly defined limits. The consistency of these freedoms and limits allows children to feel a sense of security and comfort and to feel the importance of community.'
      },

    ],
    description: 'These classrooms bring together children between the ages of 3 and 6 in an atmosphere of respect, responsibility and enjoyment. The children are exposed to a wide variety of materials and activities in several key areas of education',
    icon: <ProgramIconOne />,
    clrClass: 'clr-1',
    authorImg: author_1,
    authorName: 'Alexia Honix',
    delay: '.2s',
    age: '1-6 Yrs',
    programs: [
      {
        id: 1,
        title: '1-6 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '5.30 Hrs',
        subTitle: 'period',
      }
    ],
    isKeyArea: true,
    keyAreaTitle: 'Key areas of education',
    keyArea: [
      {
        id: 1,
        value: 'Sensorial'
      },
      {
        id: 2,
        value: 'Practical life'
      },
      {
        id: 3,
        value: 'Language'
      },
      {
        id: 4,
        value: 'Physical and biological sciences'
      },
      {
        id: 5,
        value: 'Cultural subjects'
      },
      {
        id: 5,
        value: 'mathematics'
      },
      {
        id: 5,
        value: 'geography'
      }
    ]
  },

]

export default program_data;