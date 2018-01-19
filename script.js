const Browser = ( 'the-browser', {
	props: ["posts"],
	template:`
  	<section>
  		<div v-for="item in posts" class="post">
    		<h3>{{ item.head }}</h3>
      	<p v-html="item.text"></p>
        <pre v-for="cod in item.code">
        	<code>{{cod}}</code>
        </pre>
        <div v-for="url in item.samples">
        	<a :href="url" target="_blank">
          	Sample
          </a>
        </div>
    	</div>
  	</section>`
})

var app = new Vue({
  el: '#sample',
  data: {
    rowData: {},
    sourceURL:"https://garevna.github.io/vue.github.io/data/posts.json"
  },
  computed: {
  	titles: function () {
    	return Object.keys ( this.rowData )
    },
  },
  components: {
  	'the-browser': Browser
  },
  methods: {
    loadJSON: function () {
    	this.$http.get( this.sourceURL ).then (response => {
      									this.rowData = response.body
    								}, response => {
      									console.log ("Ошибка доступа к файлу: " + this.sourceURL)
    	})
    }
  }
})
