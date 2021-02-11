<template>
    <section>
        <div class="card" @click="getEndpoint">
            <div class="doc">DOC</div>
            <img src="../../assets/images/docs.png" alt="" />
            <div class="desc">
                <div class="count">{{ content.count }}</div>
                <h3>{{ content.name }}</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia dignissimos ducimus nihil dolore laborum molestiae
                    facilis, fugit suscipit dolores doloremque. Nesciunt rerum
                    eius ipsum, molestias laborum fugiat optio distinctio
                    aliquam!
                </p>
            </div>
        </div>
        <SubCard :subContent="invoiceData" :getEndpoint="getEndpoint" />
    </section>
</template>

<script>
import SubCard from './SubCard/SubCard.vue';

export default {
    props: ['content', 'getEndpoint', 'invoiceData', 'show'],
    components: {
        SubCard,
    },
};
</script>

<style scoped>
.card {
    position: relative;
    cursor: pointer;
    display: grid;
    grid-template-columns: 120px 1fr;
    border: 1px solid #ccc;
    margin: 15px 0;
    border-radius: 10px;
    transition: 0.3s;
}

.doc {
    position: absolute;
    left: 19.5px;
    top: 49px;
    font-weight: bold;
    display: block;
    color: white;
}

.card:hover .doc {
    color: white;
}

.card:hover,
.card:active {
    border: 1px solid rgb(223, 50, 51);
    background-color: rgb(243, 93, 93);
}

.count {
    position: absolute;
    right: 15px;
    font-weight: bold;
    color: rgb(223, 50, 51);
}

.desc {
    position: relative;
    margin: 10px auto;
}

.desc:hover .count,
.desc:hover h3,
.desc:hover p {
    color: #fff;
}

.desc h3 {
    color: rgb(223, 50, 51);
}

.desc p {
    color: rgb(148, 146, 146);
    font-size: 15px;
}

img {
    width: 100px;
    margin: 10px auto;
    height: 100px;
}
</style>
