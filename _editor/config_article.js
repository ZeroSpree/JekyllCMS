var _Fields = [
// Subheadline
{
    name: 'subtitle',
    type: 'richtext',
    placement: 'left',
    classes: 'size--medium',
    event: '@blur="htmlTrim"',
    placeholder: 'Add a Subheadline...'
},

// Meta title
{
    name: 'metaTitle',
    type: 'richtext',
    placement: 'right',
    title: 'Meta title',
    event: '@blur="textTrim"',
    placeholder: 'Add meta title...'
},

// Meta description
{
    name: 'metaDescription',
    type: 'richtext',
    placement: 'right',
    title: 'Meta description',
    event: '@blur="textTrim"',
    placeholder: 'Add meta description...'
}
];
