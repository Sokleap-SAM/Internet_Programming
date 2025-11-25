<template>
    <div class="container">
        <select class="select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
        </select>
        <div>|</div>
        <div class="search-block">
            <input class="input-text" type="text" placeholder="Search for items" />
            <div>&#128269;</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBoxComponent',
}
</script>

<style scoped>
.container {
    width: auto;
    margin-left: 30px;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid #BCE3C9;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
}

.select {
  margin-right: 20px;
  background-color: transparent;
  color: #253D4E;
  border: none;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  cursor: pointer;
}

.search-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.input-text {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    color: #B6B6B6;
    background-color: transparent;
    border: none;
    margin: 0 20px;
}
</style>