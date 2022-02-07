const Post = require('./models/post');

const posts = [
    {
        title: 'Goodness',
        author: 'Rahul',
        description: 'Goodness is the very heart of the whole reign of moral values. It is by no accident that the term "good" means moral value as such, and also the specific moral quality of goodness. Among the different moral values there is none which embodies more completely the entire reign of moral values, than goodness; in it we find the purest and most typical expression of the general character of moral goodness as such. It is the center of all morality, and at the same time, it’s most sublime fruit.'
    },
    {
        title: 'Goodness',
        author: 'Rahul',
        description: 'Goodness is the very heart of the whole reign of moral values. It is by no accident that the term "good" means moral value as such, and also the specific moral quality of goodness. Among the different moral values there is none which embodies more completely the entire reign of moral values, than goodness; in it we find the purest and most typical expression of the general character of moral goodness as such. It is the center of all morality, and at the same time, it’s most sublime fruit.'
    },
    {
        title: 'Goodness',
        author: 'Rahul',
        description: 'Goodness is the very heart of the whole reign of moral values. It is by no accident that the term "good" means moral value as such, and also the specific moral quality of goodness. Among the different moral values there is none which embodies more completely the entire reign of moral values, than goodness; in it we find the purest and most typical expression of the general character of moral goodness as such. It is the center of all morality, and at the same time, it’s most sublime fruit.'
    }
];

const seedDB = async ()=>{
    await Post.deleteMany({});

    await Post.insertMany(posts);
    console.log('DB Seeded')
}

module.exports = seedDB;

