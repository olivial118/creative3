Vue.component('star-rating', VueStarRating.default);

var MazeRunner = new Vue({
  el: '#MazeRunner',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(MazeRunner.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(MazeRunner.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});


var TheGreatestShowman = new Vue({
  el: '#TheGreatestShowman',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(TheGreatestShowman.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(TheGreatestShowman.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});

var StarWars = new Vue({
  el: '#StarWars',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(StarWars.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(StarWars.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});


var Martian = new Vue({
  el: '#Martian',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(Martian.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(Martian.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});


var BeautyAndTheBeast = new Vue({
  el: '#BeautyAndTheBeast',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(BeautyAndTheBeast.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(BeautyAndTheBeast.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});


var Mummy = new Vue({
  el: '#Mummy',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(Mummy.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(Mummy.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});


var IT = new Vue({
  el: '#IT',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(IT.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(IT.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});


var Okja = new Vue({
  el: '#Okja',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(Okja.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(Okja.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});


var WonderWoman = new Vue({
  el: '#WonderWoman',
  data: {
    number: '',
    max: '',
    min: 1,
    current: {},
    loading: true,
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRatings: {},
    numRatings: {},
    averageRating: {},
  },
  methods: {
    addComment: function() {
       if (!(this.number in this.comments))
         Vue.set(WonderWoman.comments, this.number, new Array);
       this.comments[this.number].push({author:this.addedName,text:this.addedComment,time:Date()});
       this.addedName = '';
       this.addedComment = '';
     },
    addRating: function() {
      if(!(this.number in this.averageRating)) {
        Vue.set(WonderWoman.averageRating, this.number, 0);
        this.totalRatings[this.number] = 0;
        this.numRatings[this.number] = 0.0;
      }
      this.totalRatings[this.number] += this.rating;
      this.numRatings[this.number] += 1;
      this.averageRating[this.number] = (this.totalRatings[this.number] / this.numRatings[this.number]).toFixed(2);
  }
 }
});

