<!-- <script>
	export let answer = 'a mystery';
</script> -->

<script>
	export let name;
	export let version;
	export let speed;
	export let website;

	$: href = `https://www.npmjs.com/package/${name}`;
</script>

<!-- <p>The Answer is {answer}</p> -->

<p>
	The <code>{name}</code> package is {speed} fast. Download version {version} from <a {href}>npm</a>
	and <a href={website}> learn more here</a>
</p>

<!-- Introduction html ------------------------------------------------------->
<!-- <h1>This is another paragraph</h1> -->
