<template>
    <div class="card">
        <img src="../../assets/images/docs.png" alt="" />
        <div class="desc">
            <div class="num">20</div>
            <h2>title</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et
                corrupti repellat dolorum ad ipsa id! Possimus dicta libero
                assumenda.
            </p>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: grid;
    grid-template-columns: 120px 1fr;
    border: 1px solid #ccc;
    margin: 10px 0;
    border-radius: 10px;
    transition: 0.3s;
}

.card:hover,
.card:active {
    border: 1px solid rgb(223, 50, 51);
    background-color: rgb(243, 93, 93);
}

.num {
    position: absolute;
    right: 15px;
    font-weight: bold;
    color: rgb(223, 50, 51);
}

.desc {
    position: relative;
    margin: 10px auto;
}

.desc:hover .num,
.desc:hover h2,
.desc:hover p {
    color: #fff;
}

.desc h2 {
    color: rgb(223, 50, 51);
}

.desc p {
    color: rgb(148, 146, 146);
    font-size: 14px;
}

img {
    width: 100px;
    margin: 10px auto;
    height: 110px;
}
</style>
