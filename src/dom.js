function template(tpl, obj) {
    return tpl.replace(/\{(\w+)\}/g, (word, key) => {
        return obj[key];
    });
}

const DomUtil = {
    getElementsNum() {
        let set = new Set();
        function helper(childNodes) {
            if (!childNodes || childNodes.length === 0) {
                return;
            }
            let nodes = [].slice.call(childNodes);
            nodes
                .filter(node => node.nodeType === 1)
                .forEach(node => {
                    set.add(node.nodeName.toLowerCase());
                    helper(node.childNodes);
                });
        }
        helper(document.childNodes);
        return set;
    },
    template
};
export { DomUtil };
