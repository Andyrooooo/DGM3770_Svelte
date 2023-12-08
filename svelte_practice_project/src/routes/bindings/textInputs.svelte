<script>
    let firstName = ''
    let lastName = ''
    let email = ''
    let phoneNumber = ''
</script>

<div class="tInputs">
    <p>Enter Your Information</p>
    <input bind:value={firstName} placeholder="First Name" class="bg-inherit p-2 border-2 border-btn-border text-btn-border rounded-lg outline-none mb-2"/>
    <input bind:value={lastName} placeholder="Last Name"  class="bg-inherit p-2 border-2 border-btn-border text-btn-border rounded-lg outline-none mb-2"/>
    <input bind:value={email} placeholder="Email"  class="bg-inherit p-2 border-2 border-btn-border text-btn-border rounded-lg outline-none mb-2"/>
    <input bind:value={phoneNumber} placeholder="Phone Number" type="number" class="bg-inherit p-2 border-2 border-btn-border text-btn-border rounded-lg outline-none mb-2"/>
    
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email: {email}</p>
    <p>Phone Number: {phoneNumber}</p>
</div>

<style>
    p {
        flex-basis: 100%;
    }
    .tInputs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    input {
        flex-basis: 49%;
    }
</style>