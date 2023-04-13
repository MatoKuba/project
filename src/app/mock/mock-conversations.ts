import {Conversation} from "../common/model/conversation";

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 1,
    name: 'Conversation 1',
    participants: [
      {
        id: 1,
        name: 'User 1',
        email: 'email@exmpl.com'
      },
      {
        id: 2,
        name: 'User 2',
        email: 'email@exmpl.com'
      }
    ],
    messages: [
      {
        id: 1,
        content: 'Hello',
        senderId: 1,
        timestamp: new Date('2023-04-11T09:00:00.000Z')
      },
      {
        id: 2,
        content: 'Hi there',
        senderId: 2,
        timestamp: new Date('2023-04-11T09:01:00.000Z')
      },
      {
        id: 3,
        content: 'How are you?',
        senderId: 1,
        timestamp: new Date('2023-04-11T09:02:00.000Z')
      },
      {
        id: 4,
        content: 'I am fine, thank you.',
        senderId: 2,
        timestamp: new Date('2023-04-11T09:03:00.000Z')
      }
    ],
    title: 'Conversation 1'
  },{
    id: 2,
    name: 'Conversation 2',
    participants: [
      {
        id: 1,
        name: 'User 1',
        email: 'email@exmpl.com'
      },
      {
        id: 3,
        name: 'User 3',
        email: 'email@exmpl.com'
      }
    ],
    messages: [
      {
        id: 1,
        content: 'Hey there!',
        senderId: 1,
        timestamp: new Date('2023-04-11T10:00:00.000Z')
      },
      {
        id: 2,
        content: 'Hi, User 1!',
        senderId: 3,
        timestamp: new Date('2023-04-11T10:01:00.000Z')
      },
      {
        id: 3,
        content: 'How are you?',
        senderId: 1,
        timestamp: new Date('2023-04-11T10:02:00.000Z')
      },
      {
        id: 4,
        content: 'I am doing well, thanks for asking. How about you?',
        senderId: 3,
        timestamp: new Date('2023-04-11T10:03:00.000Z')
      },
      {
        id: 5,
        content: 'I am doing pretty well too, thanks. Just working on some projects.That will help people manage their bank accounts more efficiently. ',
        senderId: 1,
        timestamp: new Date('2023-04-11T10:04:00.000Z')
      }
    ],
    title: 'Conversation 2'
  },

  {
    id: 3,
      name: 'Conversation 3',
    participants: [
    {
      id: 1,
      name: 'User 2',
      email: 'email@exmpl.com'
    },
    {
      id: 4,
      name: 'User 4',
      email: 'email@exmpl.com'
    }
  ],
    messages: [
    {
      id: 1,
      content: 'Hi there!',
      senderId: 4,
      timestamp: new Date('2023-04-11T11:00:00.000Z')
    },
    {
      id: 2,
      content: 'Hello, User 4.',
      senderId: 1,
      timestamp: new Date('2023-04-11T11:01:00.000Z')
    },
    {
      id: 3,
      content: 'How are you doing today?',
      senderId: 4,
      timestamp: new Date('2023-04-11T11:02:00.000Z')
    },
    {
      id: 4,
      content: 'I am doing great, thank you for asking! Just finished a project I have been working on for a while now.',
      senderId: 1,
      timestamp: new Date('2023-04-11T11:03:00.000Z')
    },
    {
      id: 5,
      content: "That's fantastic! What was the project about?",
      senderId: 4,
      timestamp: new Date('2023-04-11T11:04:00.000Z')
},
  {
    id: 6,
      content: "It was a software application that helps people manage their finances more easily. I'm pretty proud of it, actually!",
    senderId: 1,
      timestamp: new   Date('2023-04-11T11:05:00.000Z')
  },
      {
        id: 7,
        content: 'Wow, that sounds really impressive. I could use something like that myself.',
        senderId: 4,
        timestamp: new Date('2023-04-11T11:06:00.000Z')
      },
      {
        id: 8,
        content: 'Thanks! If you want, I could show you a demo sometime.',
        senderId: 1,
        timestamp: new Date('2023-04-11T11:07:00.000Z')
      },
      {
        id: 9,
        content: 'That would be great! When are you available?',
        senderId: 4,
        timestamp: new Date('2023-04-11T11:08:00.000Z')
      },
      {
        id: 10,
        content: 'How about tomorrow at 2pm?',
        senderId: 1,
        timestamp: new Date('2023-04-11T11:09:00.000Z')
      },
      {
        id: 11,
        content: 'Sure, that works for me. Looking forward to it!',
        senderId: 4,
        timestamp: new Date('2023-04-11T11:10:00.000Z')
      }
    ],
    title: 'Conversation 3'
  }
      // add more mock conversations here...
];

export { MOCK_CONVERSATIONS };
