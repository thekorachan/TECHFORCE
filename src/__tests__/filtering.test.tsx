import { describe, it, expect } from 'vitest'
import { filterFarmers, farmers } from '../data/farmers'
import { filterProjects, projects } from '../data/projects'

describe('filtering', () => {
  it('filters farmers by name or summary', () => {
    const res = filterFarmers(farmers, 'เชียงใหม่')
    expect(res.some((f) => f.name === 'Mr. Nick Kaifreefire')).toBe(true)
  })
  it('filters projects by name or description', () => {
    const res = filterProjects(projects, 'บริษัท')
    expect(res.length).toBeGreaterThan(0)
  })
})
