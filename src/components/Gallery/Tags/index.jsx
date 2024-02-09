import tags from './tags.json'

import { StyledTag, TagTitle } from './styles'

const Tags = () => {
  return (
    <>
      <TagTitle>Busque por tags:</TagTitle>
      {tags.map((tag) => (
        <StyledTag key={tag.id}>{tag.titulo}</StyledTag>
      ))}
    </>
  )
}

export default Tags
