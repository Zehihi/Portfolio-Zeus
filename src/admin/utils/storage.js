// Local storage utility for managing admin data

export const storage = {
  // Projects
  getProjects: () => {
    try {
      return JSON.parse(localStorage.getItem('adminProjects')) || [];
    } catch {
      return [];
    }
  },

  setProjects: (projects) => {
    localStorage.setItem('adminProjects', JSON.stringify(projects));
  },

  addProject: (project) => {
    const projects = storage.getProjects();
    const newProject = {
      ...project,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    projects.push(newProject);
    storage.setProjects(projects);
    return newProject;
  },

  updateProject: (id, updatedProject) => {
    const projects = storage.getProjects();
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
      projects[index] = { ...projects[index], ...updatedProject };
      storage.setProjects(projects);
    }
  },

  deleteProject: (id) => {
    const projects = storage.getProjects().filter(p => p.id !== id);
    storage.setProjects(projects);
  },

  // Blog Posts
  getPosts: () => {
    try {
      return JSON.parse(localStorage.getItem('adminPosts')) || [];
    } catch {
      return [];
    }
  },

  setPosts: (posts) => {
    localStorage.setItem('adminPosts', JSON.stringify(posts));
  },

  addPost: (post) => {
    const posts = storage.getPosts();
    const newPost = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'draft'
    };
    posts.push(newPost);
    storage.setPosts(posts);
    return newPost;
  },

  updatePost: (id, updatedPost) => {
    const posts = storage.getPosts();
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
      posts[index] = { ...posts[index], ...updatedPost };
      storage.setPosts(posts);
    }
  },

  deletePost: (id) => {
    const posts = storage.getPosts().filter(p => p.id !== id);
    storage.setPosts(posts);
  },

  // Skills
  getSkills: () => {
    try {
      return JSON.parse(localStorage.getItem('adminSkills')) || [];
    } catch {
      return [];
    }
  },

  setSkills: (skills) => {
    localStorage.setItem('adminSkills', JSON.stringify(skills));
  },

  addSkill: (skill) => {
    const skills = storage.getSkills();
    const newSkill = {
      ...skill,
      id: Date.now().toString()
    };
    skills.push(newSkill);
    storage.setSkills(skills);
    return newSkill;
  },

  updateSkill: (id, updatedSkill) => {
    const skills = storage.getSkills();
    const index = skills.findIndex(s => s.id === id);
    if (index !== -1) {
      skills[index] = { ...skills[index], ...updatedSkill };
      storage.setSkills(skills);
    }
  },

  deleteSkill: (id) => {
    const skills = storage.getSkills().filter(s => s.id !== id);
    storage.setSkills(skills);
  },

  // Messages
  getMessages: () => {
    try {
      return JSON.parse(localStorage.getItem('adminMessages')) || [];
    } catch {
      return [];
    }
  },

  setMessages: (messages) => {
    localStorage.setItem('adminMessages', JSON.stringify(messages));
  },

  addMessage: (message) => {
    const messages = storage.getMessages();
    const newMessage = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      isRead: false
    };
    messages.unshift(newMessage);
    storage.setMessages(messages);
    return newMessage;
  },

  markMessageAsRead: (id) => {
    const messages = storage.getMessages();
    const index = messages.findIndex(m => m.id === id);
    if (index !== -1) {
      messages[index].isRead = !messages[index].isRead;
      storage.setMessages(messages);
    }
  },

  deleteMessage: (id) => {
    const messages = storage.getMessages().filter(m => m.id !== id);
    storage.setMessages(messages);
  },

  // Analytics
  recordPageView: () => {
    const views = parseInt(localStorage.getItem('totalVisitors')) || 0;
    localStorage.setItem('totalVisitors', views + 1);
  },

  getTotalVisitors: () => {
    return parseInt(localStorage.getItem('totalVisitors')) || 0;
  }
};
