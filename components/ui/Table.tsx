import { ReactNode } from 'react'

interface TableColumn {
  /**
   * Clé unique de la colonne
   */
  key: string
  
  /**
   * Label du header
   */
  label: string
  
  /**
   * Alignement du contenu
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right'
  
  /**
   * Render custom du contenu de la cellule
   */
  render?: (value: any, row: any, rowIndex: number) => ReactNode
}

interface TableProps {
  /**
   * Configuration des colonnes
   */
  columns: TableColumn[]
  
  /**
   * Données du tableau
   */
  data: Record<string, any>[]
  
  /**
   * Style zebra (alternance de fond)
   * @default false
   */
  zebra?: boolean
  
  /**
   * Taille de la table
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  
  /**
   * Caption (titre accessible du tableau)
   */
  caption?: string
  
  /**
   * Masquer le caption visuellement (reste accessible)
   * @default true
   */
  hideCaptionVisually?: boolean
  
  /**
   * Callback au clic sur une ligne
   */
  onRowClick?: (row: any, rowIndex: number) => void
  
  /**
   * Message si aucune donnée
   * @default 'Aucune donnée disponible'
   */
  emptyMessage?: string
  
  /**
   * Classes CSS additionnelles sur le wrapper
   */
  className?: string
}

export function Table({
  columns,
  data,
  zebra = false,
  size = 'md',
  caption,
  hideCaptionVisually = true,
  onRowClick,
  emptyMessage = 'Aucune donnée disponible',
  className = ''
}: TableProps) {
  const sizeClasses = {
    sm: 'px-4 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-5',
  }
  
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-body-m',
    lg: 'text-body-l',
  }
  
  const padding = sizeClasses[size]
  const textSize = textSizeClasses[size]
  
  const getAlignment = (align: string = 'left') => {
    switch (align) {
      case 'center': return 'text-center'
      case 'right': return 'text-right'
      default: return 'text-left'
    }
  }
  
  return (
    <div className={`overflow-x-auto ${className}`.trim()}>
      <table className="w-full border-collapse">
        {caption && (
          <caption className={hideCaptionVisually ? 'sr-only' : 'mb-4 text-left font-medium text-gray-900'}>
            {caption}
          </caption>
        )}
        
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`
                  ${padding}
                  ${getAlignment(column.align)}
                  text-label text-gray-700 font-semibold uppercase
                `.replace(/\s+/g, ' ').trim()}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody className="divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={`${padding} text-center text-gray-600 ${textSize}`}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  border-b border-gray-200
                  transition-colors
                  ${zebra && rowIndex % 2 === 1 ? 'bg-gray-50' : ''}
                  ${onRowClick ? 'cursor-pointer hover:bg-gray-100' : 'hover:bg-gray-50'}
                `.replace(/\s+/g, ' ').trim()}
                onClick={() => onRowClick?.(row, rowIndex)}
                onKeyDown={(e) => {
                  if (onRowClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault()
                    onRowClick(row, rowIndex)
                  }
                }}
                tabIndex={onRowClick ? 0 : undefined}
                role={onRowClick ? 'button' : undefined}
              >
                {columns.map((column, colIndex) => {
                  const value = row[column.key]
                  const content = column.render 
                    ? column.render(value, row, rowIndex) 
                    : value
                  
                  // Première colonne en gras (label)
                  const isFirstColumn = colIndex === 0
                  
                  const Cell = isFirstColumn ? 'th' : 'td'
                  const cellProps = isFirstColumn ? { scope: 'row' } : {}
                  
                  return (
                    <Cell
                      key={column.key}
                      {...cellProps}
                      className={`
                        ${padding}
                        ${getAlignment(column.align)}
                        ${textSize}
                        ${isFirstColumn ? 'text-gray-900 font-medium' : 'text-gray-700'}
                      `.replace(/\s+/g, ' ').trim()}
                    >
                      {content}
                    </Cell>
                  )
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
