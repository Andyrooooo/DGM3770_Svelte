<script>
    let firstName = ''
    let lastName = ''
    let email = ''
    let phoneNumber = ''
</script>

<div class="tInputs">
    <h1>Text Inputs</h1>
    <p>Enter Your Information</p>
    <input bind:value={firstName} placeholder="First Name" />
    <input bind:value={lastName} placeholder="Last Name" />
    <input bind:value={email} placeholder="Email" />
    <input bind:value={phoneNumber} placeholder="Phone Number" type="number"/>

    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email: {email}</p>
    <p>Phone Number: {phoneNumber}</p>
</div>

<style>
    p {
        color: black;
        flex-basis: 100%;
        text-align: center;
    }
    .tInputs {
        background: white;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    h1 {
        color: black;
        flex-basis: 100%;
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    input {
        border: 1px solid black;
        color: black;
        box-sizing: border-box;
        flex-basis: 49%;
        padding: 5px;
        margin: 0.25rem 0;
        border-radius: 5px;
        background-color: rgb(240, 240, 240);
    }
</style>