<template>
    <div class="form">
        <div class="img">
            <img src="../../assets/images/search.png" alt="" />
        </div>
        <input type="text" name="" id="" placeholder="Search" />
        <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
    </div>
</template>

<style scoped>
.form {
    height: 35px;
    width: 100%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 40px 1fr 90px;
}

.img {
    width: 40px;
    position: relative;
    background-color: rgb(235, 235, 235);
}
img {
    width: 30px;
    position: absolute;
    left: 5px;
    top: 3px;
}

input[type='text'] {
    outline: none;
    text-indent: 8px;
    border: 1px solid #ddd;
}

select {
    border: 1px solid #ddd;
    outline: none;
    background-color: rgb(151, 150, 150);
    border: none;
    border-radius: 2px;
    color: #fff;
}

::placeholder {
    text-indent: 8px;
}
</style>
