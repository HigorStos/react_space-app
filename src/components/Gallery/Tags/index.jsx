import tags from './tags.json'

import { TagsContainer, TagTitle, Tag } from './styles'

const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <TagTitle>Busque por tags:</TagTitle>
      {tags.map((tag) => (
        <Tag key={tag.id} onClick={() => setTag(tag.tag)}>
          {tag.titulo}
        </Tag>
      ))}
    </TagsContainer>
  )
}

export default Tags
