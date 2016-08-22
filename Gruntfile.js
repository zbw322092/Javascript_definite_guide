module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['../Javascript_definite_guide/**/**/*.js', '../Javascript_definite_guide/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		watch: {
			files: ['../Javascript_definite_guide/*/js'],
			task: ['uglify']
		},

		log: {
			foo: [1,2,3],
			bar: 'hello world',
			baz: false
		},

		test: {
			foo: [1,2,3],
			bar: 'hello world',
			baz: false
		},


		// qunit: {
		// 	files: ['test/**/*.html']
		// },




	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');



	grunt.registerTask('concat', ['concat']);
	grunt.registerTask('watch', ['watch']);
	grunt.registerTask('default', ['concat', 'uglify', 'log']);

	grunt.registerMultiTask('log', 'Log stuff', function() {
		grunt.log.writeln(this);
		grunt.log.writeln(this.target + ': ' + this.data);
	});

	grunt.registerMultiTask('bar', 'bar stuff', function() {
		grunt.log.writeln(this);
	});

	grunt.registerTask('test', 'A sample that logs stuff', function(arg1, arg2) {
		if(arguments.length === 0) {
			grunt.log.writeln(this.name + ", no args");
		} else {
			grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
		}
	});

	// 不一定要实现定义一个任务
	grunt.registerTask('person', 'a person stuff', function() {
		grunt.log.writeln(this.name);
	});

	// 在一个任务内部执行另一个任务
	grunt.registerTask('log', 'a log stuff', function() {
		// grunt.log.writeln(this.name);
		grunt.task.run(['person']);
	});	

	// 定义异步任务
	grunt.registerTask('asyncfoo', 'an async task', function() {
		var done = this.async();

		grunt.log.writeln('processing task');

		setTimeout(function() {
			grunt.log.writeln('All done!');
			done();
		}, 2000);
	});

	// 任务还可以依赖于其他任务的成功执行。注意 grunt.task.requires 并不会真正的运行其他任务，
	// 它仅仅检查其它任务是否已经执行，并且没有失败。






}










































